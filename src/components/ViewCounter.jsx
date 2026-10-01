import { useState, useEffect } from "react";
import { Icon } from "./Icon";

export function ViewCounter({ className = "" }) {
  const [views, setViews] = useState(() => {
    try {
      const cached = localStorage.getItem("portfolio_views_count");
      return cached !== null ? parseInt(cached, 10) : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    let mounted = true;

    async function syncViews() {
      try {
        const hasCounted = sessionStorage.getItem("portfolio_view_counted");
        const action = hasCounted ? "get" : "hit";
        const url = `https://countapi.mileshilliard.com/api/v1/${action}/shivamkumar-portfolio-views`;

        const res = await fetch(url);
        if (!res.ok) throw new Error("Counter response not ok");
        const data = await res.json();

        if (mounted && typeof data?.value === "number") {
          setViews(data.value);
          localStorage.setItem("portfolio_views_count", data.value.toString());
          if (!hasCounted) {
            sessionStorage.setItem("portfolio_view_counted", "true");
          }
        }
      } catch (err) {
        console.warn("View counter fallback active:", err);
      }
    }

    syncViews();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <div
      title="Portfolio Views"
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-(--text-muted) select-none ${className}`}
    >
      <Icon name="eye" size={14} />
      <span className="tabular-nums font-medium">
        {views.toLocaleString()} views
      </span>
    </div>
  );
}
