import React, { useState } from "react";
import { Container, Nav } from "react-bootstrap";
import PortfolioDashboard from "../components/PortfolioDashboard";
import PortfolioAnalytics from "../components/PortfolioAnalytics";
import RecommendationsEngine from "../components/RecommendationsEngine";
import AvailableShares from "../components/AvailableShares";

const Portfolio = ({ darkMode }) => {
  const [activeView, setActiveView] = useState("dashboard");

  const navStyle = {
    background: darkMode ? "rgba(31, 41, 55, 0.8)" : "rgba(249, 250, 251, 0.8)",
    border: darkMode
      ? "1px solid rgba(139, 92, 246, 0.2)"
      : "1px solid rgba(139, 92, 246, 0.15)",
    backdropFilter: "blur(20px)",
    borderRadius: "16px",
    padding: "1rem",
    marginBottom: "2rem",
  };

  const navLinkStyle = {
    color: darkMode ? "#d1d5db" : "#6b7280",
    borderRadius: "8px",
    padding: "0.6rem 1.2rem",
    cursor: "pointer",
    transition: "all 0.3s ease",
    border: "none",
    background: "transparent",
    textDecoration: "none",
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    fontWeight: "600",
  };

  return (
    <div
      style={{
        background: darkMode ? "#111827" : "#f3f4f6",
        minHeight: "100vh",
        paddingTop: "2rem",
      }}
    >
      <Container fluid className="px-3 px-md-4">
        {/* Navigation */}
        <div style={navStyle} className="mb-4">
          <div className="d-flex gap-2 flex-wrap">
            <button
              style={
                activeView === "dashboard" ? activeNavLinkStyle : navLinkStyle
              }
              onClick={() => setActiveView("dashboard")}
              className="flex-grow-1 flex-md-grow-0"
            >
              <i className="bi bi-speedometer2 me-2"></i>
              Dashboard
            </button>
            <button
              style={
                activeView === "analytics" ? activeNavLinkStyle : navLinkStyle
              }
              onClick={() => setActiveView("analytics")}
              className="flex-grow-1 flex-md-grow-0"
            >
              <i className="bi bi-graph-up-arrow me-2"></i>
              Analytics
            </button>
            <button
              style={
                activeView === "recommendations"
                  ? activeNavLinkStyle
                  : navLinkStyle
              }
              onClick={() => setActiveView("recommendations")}
              className="flex-grow-1 flex-md-grow-0"
            >
              <i className="bi bi-lightbulb me-2"></i>
              Recommendations
            </button>
            <button
              style={
                activeView === "available" ? activeNavLinkStyle : navLinkStyle
              }
              onClick={() => setActiveView("available")}
              className="flex-grow-1 flex-md-grow-0"
            >
              <i className="bi bi-shop me-2"></i>
              Buy Shares
            </button>
          </div>
        </div>

        {/* Views */}
        {activeView === "dashboard" && (
          <PortfolioDashboard darkMode={darkMode} />
        )}
        {activeView === "analytics" && (
          <PortfolioAnalytics darkMode={darkMode} />
        )}
        {activeView === "recommendations" && (
          <RecommendationsEngine darkMode={darkMode} />
        )}
        {activeView === "available" && <AvailableShares darkMode={darkMode} />}
      </Container>
    </div>
  );
};

export default Portfolio;
