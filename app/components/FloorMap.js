export default function FloorMap({ mapTag = "Event Map" }) {
  return (
    <div className="floor-map-wrap">
      <p className="section-tag" style={{ marginBottom: "1rem" }}>{mapTag}</p>
      <svg
        className="floor-map"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Floor plan of Howard and Evanston Community Center"
      >
        {/* Outer walls */}
        <rect x="10" y="10" width="380" height="280" rx="4" stroke="var(--border)" strokeWidth="3" fill="var(--surface)"/>

        {/* Main Entrance */}
        <rect x="160" y="270" width="80" height="20" fill="var(--primary)" rx="2"/>
        <text x="200" y="284" textAnchor="middle" fill="white" fontSize="10" fontFamily="inherit" fontWeight="600">Main Entrance</text>

        {/* Gymnasium */}
        <rect x="20" y="20" width="170" height="140" rx="3" fill="#EBF0F8" stroke="var(--primary)" strokeWidth="2"/>
        <text x="105" y="86" textAnchor="middle" fill="var(--primary)" fontSize="13" fontFamily="inherit" fontWeight="700">Gymnasium</text>
        <text x="105" y="103" textAnchor="middle" fill="var(--primary)" fontSize="10" fontFamily="inherit">Craft Fair and Food</text>

        {/* Main Hall */}
        <rect x="210" y="20" width="170" height="140" rx="3" fill="#FEF0E6" stroke="var(--accent)" strokeWidth="2"/>
        <text x="295" y="86" textAnchor="middle" fill="var(--accent)" fontSize="13" fontFamily="inherit" fontWeight="700">Main Hall</text>
        <text x="295" y="103" textAnchor="middle" fill="var(--accent)" fontSize="10" fontFamily="inherit">Music and Exhibits</text>

        {/* Room 104 */}
        <rect x="20" y="180" width="110" height="80" rx="3" fill="#F0FBF0" stroke="#2E7D32" strokeWidth="2"/>
        <text x="75" y="218" textAnchor="middle" fill="#2E7D32" fontSize="12" fontFamily="inherit" fontWeight="700">Room 104</text>
        <text x="75" y="234" textAnchor="middle" fill="#2E7D32" fontSize="10" fontFamily="inherit">Adult Ed Info</text>

        {/* Hallway label */}
        <text x="200" y="200" textAnchor="middle" fill="var(--muted)" fontSize="11" fontFamily="inherit">Hallway</text>

        {/* Room 106 */}
        <rect x="270" y="180" width="110" height="80" rx="3" fill="#F5F0FE" stroke="#6B21A8" strokeWidth="2"/>
        <text x="325" y="218" textAnchor="middle" fill="#6B21A8" fontSize="12" fontFamily="inherit" fontWeight="700">Room 106</text>
        <text x="325" y="234" textAnchor="middle" fill="#6B21A8" fontSize="10" fontFamily="inherit">Community Cookbook</text>

        {/* Entrance arrow */}
        <path d="M200 255 L200 240" stroke="var(--primary)" strokeWidth="2" markerEnd="url(#arrow)"/>
        <defs>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--primary)"/>
          </marker>
        </defs>
      </svg>

      <div className="floor-map-legend">
        <span className="legend-item"><span className="legend-dot" style={{ background: "#EBF0F8", border: "2px solid var(--primary)" }}></span>Gymnasium</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: "#FEF0E6", border: "2px solid var(--accent)" }}></span>Main Hall</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: "#F0FBF0", border: "2px solid #2E7D32" }}></span>Room 104</span>
        <span className="legend-item"><span className="legend-dot" style={{ background: "#F5F0FE", border: "2px solid #6B21A8" }}></span>Room 106</span>
      </div>
    </div>
  );
}
