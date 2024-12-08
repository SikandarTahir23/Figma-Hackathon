// Assuming you are rendering a list of items in Latest.tsx
const Latest = ({ items }) => {
    return (
      <div>
        {items.map((item, index) => (
          <div key={item.id || index}> {/* Ensure each item has a unique key */}
            {/* Render item content */}
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    );
  };
  