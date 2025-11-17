const { useState } = React;

const MOOD_TABS = ["Gallery", "AI Mood", "My Moods"];

const SAMPLE_MOODS = [
  {
    id: "midnight-velvet",
    name: "Midnight Velvet",
    tag: "Christmas · Moody",
    badge: "Trending",
  },
  {
    id: "snow-glow",
    name: "Snow Glow",
    tag: "Soft · Cozy",
    badge: "Popular",
  },
  {
    id: "neon-halo",
    name: "Neon Halo",
    tag: "Electric · Fun",
    badge: "New",
  },
  {
    id: "chaos-christmas",
    name: "Chaos Christmas",
    tag: "Wild · Loud",
    badge: "Bold",
  },
  {
    id: "silent-gold",
    name: "Silent Gold",
    tag: "Minimal · Luxe",
    badge: "Pro",
  },
  {
    id: "after-midnight",
    name: "After Midnight",
    tag: "Late · Intense",
    badge: "Pro",
  },
];

function StudioLayout({ children }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        background:
          "radial-gradient(circle at top left, rgba(123,97,255,0.35), transparent 50%), radial-gradient(circle at bottom right, rgba(255,99,188,0.18), #05040a)",
      }}
    >
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "radial-gradient(circle at 30% 0%, #ffed9f, #ff8bcf 45%, #7f7bff 75%)",
              boxShadow: "0 0 18px rgba(255, 255, 255, 0.25)",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: 700 }}>yy</span>
          </div>
          <div>
            <div
              style={{
                fontSize: "14px",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                opacity: 0.7,
              }}
            >
              yyovvo Studio
            </div>
            <div style={{ fontSize: "12px", opacity: 0.6 }}>
              Where every moment gets a Premier.
            </div>
          </div>
        </div>
        <div
          style={{
            fontSize: "12px",
            padding: "4px 10px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.16)",
            background: "rgba(10,10,18,0.6)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span style={{ opacity: 0.6 }}>Step 1 · </span>
          <span style={{ fontWeight: 500 }}>Pick Your Mood</span>
        </div>
      </header>
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {children}
      </main>
    </div>
  );
}

function MoodPage() {
  const [activeTab, setActiveTab] = useState("Gallery");
  const [selectedMoodId, setSelectedMoodId] = useState(null);

  const handleNext = () => {
    if (!selectedMoodId) return;
    alert(
      `In real Studio, we now move to Page 2 with mood: ${selectedMoodId}.\nFor now, this proves Page 1 works.`
    );
  };

  return (
    <StudioLayout>
      {/* Title block */}
      <section style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div
          style={{
            fontSize: "14px",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            opacity: 0.6,
          }}
        >
          1 · Pick Your Mood
        </div>
        <h1
          style={{
            fontSize: "28px",
            lineHeight: 1.2,
            fontWeight: 600,
          }}
        >
          Every Premier begins{" "}
          <span
            style={{
              background:
                "linear-gradient(120deg, #ffe6a7, #ff9ee2, #8ab5ff)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            with a feeling.
          </span>
        </h1>
        <p style={{ fontSize: "14px", opacity: 0.7, maxWidth: "420px" }}>
          Choose the Mood that sets the stage. This is the opening shot of your
          yyovvo.
        </p>
      </section>

      {/* Tabs */}
      <section style={{ display: "flex", gap: "10px", marginTop: "4px" }}>
        {MOOD_TABS.map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: "6px 14px",
                borderRadius: "999px",
                border: isActive
                  ? "1px solid rgba(255,255,255,0.9)"
                  : "1px solid rgba(255,255,255,0.16)",
                background: isActive
                  ? "radial-gradient(circle at top left, #ffe6a7, #ff9ee2)"
                  : "rgba(8,8,18,0.7)",
                color: isActive ? "#140b1c" : "#f8f5ff",
                fontSize: "12px",
                fontWeight: isActive ? 600 : 400,
                cursor: "pointer",
                transition: "all 0.18s ease-out",
              }}
            >
              {tab}
            </button>
          );
        })}
      </section>

      {/* AI / My Moods placeholder messages */}
      {activeTab === "AI Mood" && (
        <div
          style={{
            marginTop: "6px",
            fontSize: "13px",
            opacity: 0.7,
          }}
        >
          AI Mood coming soon — you’ll be able to describe the emotion and
          we’ll paint the poster. For now, pick from Gallery to move forward.
        </div>
      )}
      {activeTab === "My Moods" && (
        <div
          style={{
            marginTop: "6px",
            fontSize: "13px",
            opacity: 0.7,
          }}
        >
          My Moods will show your saved favourites. For now, Gallery is your
          playground.
        </div>
      )}

      {/* Mood grid */}
      <section
        style={{
          marginTop: "10px",
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "16px",
        }}
      >
        {SAMPLE_MOODS.map((mood) => {
          const isSelected = mood.id === selectedMoodId;
          return (
            <button
              key={mood.id}
              onClick={() => setSelectedMoodId(mood.id)}
              style={{
                position: "relative",
                borderRadius: "18px",
                padding: "10px",
                border: isSelected
                  ? "1px solid rgba(255,255,255,0.95)"
                  : "1px solid rgba(255,255,255,0.12)",
                background:
                  "radial-gradient(circle at top, rgba(255,255,255,0.06), rgba(8,8,20,0.9))",
                backdropFilter: "blur(16px)",
                cursor: "pointer",
                textAlign: "left",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                boxShadow: isSelected
                  ? "0 0 24px rgba(255,255,255,0.25)"
                  : "0 0 16px rgba(0,0,0,0.65)",
                transform: isSelected ? "translateY(-2px)" : "translateY(0)",
                transition: "all 0.16s ease-out",
              }}
            >
              <div
                style={{
                  borderRadius: "14px",
                  height: "180px",
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255,255,255,0.18), transparent 40%), radial-gradient(circle at 10% 0%, #ffeeb3, transparent 60%), radial-gradient(circle at 90% 100%, #ff9ee2, #342a5a)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    mixBlendMode: "soft-light",
                    opacity: 0.4,
                    backgroundImage:
                      "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.25), transparent 55%), radial-gradient(circle at 100% 100%, rgba(0,0,0,0.7), transparent 55%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    borderRadius: "14px",
                    border: "1px solid rgba(255,255,255,0.16)",
                  }}
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {mood.name}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      padding: "3px 8px",
                      borderRadius: "999px",
                      border: "1px solid rgba(255,255,255,0.3)",
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.15), rgba(0,0,0,0.3))",
                    }}
                  >
                    {mood.badge}
                  </span>
                </div>
                <span style={{ fontSize: "11px", opacity: 0.7 }}>
                  {mood.tag}
                </span>
                {isSelected && (
                  <span
                    style={{
                      marginTop: "4px",
                      fontSize: "11px",
                      color: "#ffe6a7",
                    }}
                  >
                    ✓ Selected Mood
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </section>

      {/* Bottom controls */}
      <section
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "12px",
        }}
      >
        <button
          style={{
            fontSize: "12px",
            padding: "8px 12px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.18)",
            background: "transparent",
            color: "rgba(255,255,255,0.7)",
            cursor: "pointer",
          }}
          onClick={() =>
            alert("In final product, this returns you to yyovvo.com")
          }
        >
          ← Back to yyovvo
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedMoodId}
          style={{
            fontSize: "13px",
            padding: "10px 22px",
            borderRadius: "999px",
            border: "none",
            background: selectedMoodId
              ? "linear-gradient(135deg, #ffe6a7, #ff9ee2, #8ab5ff)"
              : "rgba(120,120,140,0.4)",
            color: selectedMoodId ? "#140b1c" : "rgba(230,230,240,0.6)",
            cursor: selectedMoodId ? "pointer" : "not-allowed",
            boxShadow: selectedMoodId
              ? "0 0 24px rgba(255,255,255,0.35)"
              : "none",
            transition: "all 0.16s ease-out",
          }}
        >
          Next · Add Your Message →
        </button>
      </section>
    </StudioLayout>
  );
}

function App() {
  return <MoodPage />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));
