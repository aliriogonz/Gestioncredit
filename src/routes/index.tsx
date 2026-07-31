import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GestiónCredit — Importaciones y Ventas" },
      {
        name: "description",
        content:
          "App para control de compras de importación, inventario, clientes y ventas a crédito. Datos guardados localmente en tu iPhone.",
      },
      { property: "og:title", content: "GestiónCredit — Importaciones y Ventas" },
      {
        property: "og:description",
        content:
          "App para control de compras de importación, inventario, clientes y ventas a crédito. Datos guardados localmente en tu iPhone.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#d97706" },
    ],
    links: [{ rel: "apple-touch-icon", href: "/icon-180.png" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    // Redirige inmediatamente a la app HTML (base de datos IndexedDB local).
    window.location.replace("/app.html");
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fafaf9",
        color: "#1c1917",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', sans-serif",
        padding: "24px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 360 }}>
        <div
          style={{
            width: 84,
            height: 84,
            borderRadius: 20,
            background: "#d97706",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
            margin: "0 auto 18px",
            boxShadow: "0 8px 24px rgba(217,119,6,0.35)",
          }}
        >
          💳
        </div>
        <h1 style={{ fontSize: 22, fontWeight: 800, color: "#d97706", marginBottom: 6 }}>
          GestiónCredit
        </h1>
        <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 18 }}>
          Abriendo la aplicación…
        </p>
        <a
          href="/app.html"
          style={{
            display: "inline-block",
            padding: "12px 22px",
            borderRadius: 12,
            background: "#d97706",
            color: "white",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Abrir app
        </a>
        <p style={{ fontSize: 12, color: "#6b7280", marginTop: 22, lineHeight: 1.5 }}>
          En iPhone: toca <b>Compartir</b> ⬆︎ en Safari y <b>Añadir a pantalla de inicio</b>{" "}
          para instalarla como app con base de datos local.
        </p>
      </div>
    </div>
  );
}
