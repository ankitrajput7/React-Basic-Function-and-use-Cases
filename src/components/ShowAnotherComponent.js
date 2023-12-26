import { useState } from "react";

function ShowAnotherComponent() {
  const [showAnother, setShowanother] = useState(false);
  function handleShowanother() {
    setShowanother((prev) => !prev);
    document.body.style.overflow = showAnother ? "auto" : "hidden";
  }
  let width = window.innerHeight;
  console.log(width);

  return (
    <>
      <div style={{ overflow: "hidden" }}>
        <header
          style={{
            width: "100%",
            height: "3rem",
            backgroundColor: "orange",
            display: "flex",
            justifyContent: "space-between",
            color: "white",
            alignItems: "center",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 1000,
            padding: "0 1rem",
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: "large",
              fontWeight: "lighter",
              marginLeft: ".5rem",
            }}
          >
            My App
          </div>
          <ul style={{ display: "flex", listStyle: "none" }}>
            <li style={{ marginRight: ".5rem", cursor: "pointer" }}>link1</li>
            <li style={{ marginRight: ".5rem", cursor: "pointer" }}>link2</li>
            <li style={{ marginRight: ".5rem", cursor: "pointer" }}>link3</li>
            <li
              style={{ marginRight: "1.5rem", cursor: "pointer" }}
              onClick={handleShowanother}
            >
              link4
            </li>
          </ul>
        </header>
        <section>
          <p style={{}}>
            loremIt looks like you're trying to create an HTML list item with
            some inline styles using React JSX syntax. However, there's a small
            mistake in your code. The hover property should be part of a CSS
            pseudo-class, not directly in the style attribute. Here's the
            corrected code: jsx Copy code In the corrected code, I've moved the
            hover property to the cursor property, as cursor: pointer is
            commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered. It looks like you're
            trying to create an HTML list item with some inline styles using
            React JSX syntax. However, there's a small mistake in your code. The
            hover property should be part of a CSS pseudo-class, not directly in
            the style attribute. Here's the corrected code: jsx Copy code In the
            corrected code, I've moved the hover property to the cursor
            property, as cursor: pointer is commonly used to indicate a
            clickable link, and it will apply the pointer cursor when the
            element is hovered. It looks like you're trying to create an HTML
            list item with some inline styles using React JSX syntax. However,
            there's a small mistake in your code. The hover property should be
            part of a CSS pseudo-class, not directly in the style attribute.
            Here's the corrected code: jsx Copy code In the corrected code, I've
            moved the hover property to the cursor property, as cursor: pointer
            is commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered. It looks like you're
            trying to create an HTML list item with some inline styles using
            React JSX syntax. However, there's a small mistake in your code. The
            hover property should be part of a CSS pseudo-class, not directly in
            the style attribute. Here's the corrected code: jsx Copy code In the
            corrected code, I've moved the hover property to the cursor
            property, as cursor: pointer is commonly used to indicate a
            clickable link, and it will apply the pointer cursor when the
            element is hovered. It looks like you're trying to create an HTML
            list item with some inline styles using React JSX syntax. However,
            there's a small mistake in your code. The hover property should be
            part of a CSS pseudo-class, not directly in the style attribute.
            Here's the corrected code: jsx Copy code In the corrected code, I've
            moved the hover property to the cursor property, as cursor: pointer
            is commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered. It looks like you're
            trying to create an HTML list item with some inline styles using
            React JSX syntax. However, there's a small mistake in your code. The
            hover property should be part of a CSS pseudo-class, not directly in
            the style attribute. Here's the corrected code: jsx Copy code In the
            corrected code, I've moved the hover property to the cursor
            property, as cursor: pointer is commonly used to indicate a
            clickable link, and it will apply the pointer cursor when the
            element is hovered. It looks like you're trying to create an HTML
            list item with some inline styles using React JSX syntax. However,
            there's a small mistake in your code. The hover property should be
            part of a CSS pseudo-class, not directly in the style attribute.
            Here's the corrected code: jsx Copy code In the corrected code, I've
            moved the hover property to the cursor property, as cursor: pointer
            is commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered. It looks like you're
            trying to create an HTML list item with some inline styles using
            React JSX syntax. However, there's a small mistake in your code. The
            hover property should be part of a CSS pseudo-class, not directly in
            the style attribute. Here's the corrected code: jsx Copy code In the
            corrected code, I've moved the hover property to the cursor
            property, as cursor: pointer is commonly used to indicate a
            clickable link, and it will apply the pointer cursor when the
            element is hovered. It looks like you're trying to create an HTML
            list itemwith some inline styles using React JSX syntax. However,
            there's a small mistake in your code. The hover property should be
            part of a CSS pseudo-class, not directly in the style attribute.
            Here's the corrected code: jsx Copy code In the corrected code, I've
            moved the hover property to the cursor property, as cursor: pointer
            is commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered. It looks like you're
            trying to create an HTML list item with some inline styles using
            React JSX syntax. However, there's a small mistake in your code. The
            hover property should be part of a CSS pseudo-class, not directly in
            the style attribute. Here's the corrected code: jsx Copy code In the
            corrected code, I've moved the hover property to the cursor
            property, as cursor: pointer is commonly used to indicate a
            clickable link, and it will apply the pointer cursor when the
            element is hovered. It looks like you're trying to create an HTML
            list item with some inline styles using React JSX syntax. However,
            there's a small mistake in your code. The hover property should be
            part of a CSS pseudo-class, not directly in the style attribute.
            Here's the corrected code: jsx Copy code In the corrected code, I've
            moved the hover property to the cursor property, as cursor: pointer
            is commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered. It looks like you're
            trying to create an HTML list item with some inline styles using
            React JSX syntax. However, there's a small mistake in your code. The
            hover property should be part of a CSS pseudo-class, not directly in
            the style attribute. Here's the corrected code: jsx Copy code In the
            corrected code, I've moved the hover property to the cursor
            property, as cursor: pointer is commonly used to indicate a
            clickable link, and it will apply the pointer cursor when the
            element is hovered. It looks like you're trying to create an HTML
            list item with some inline styles using React JSX syntax. However,
            there's a small mistake in your code. The hover property should be
            part of a CSS pseudo-class, not directly in the style attribute.
            Here's the corrected code: jsx Copy code In the corrected code, I've
            moved the hover property to the cursor property, as cursor: pointer
            is commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered. It looks like you're
            trying to create an HTML list item with some inline styles using
            React JSX syntax. However, there's a small mistake in your code. The
            hover property should be part of a CSS pseudo-class, not directly in
            the style attribute. Here's the corrected code: jsx Copy code In the
            corrected code, I've moved the hover property to the cursor
            property, as cursor: pointer is commonly used to indicate a
            clickable link, and it will apply the pointer cursor when the
            element is hovered. It looks like you're trying to create an HTML
            list item with some inline styles using React JSX syntax. However,
            there's a small mistake in your code. The hover property should be
            part of a CSS pseudo-class, not directly in the style attribute.
            Here's the corrected code: jsx Copy code In the corrected code, I've
            moved the hover property to the cursor property, as cursor: pointer
            is commonly used to indicate a clickable link, and it will apply the
            pointer cursor when the element is hovered.
          </p>
        </section>
        {showAnother && (
          <ComponentToDisplay handleShowanother={handleShowanother} />
        )}
      </div>
    </>
  );
}

function ComponentToDisplay({ handleShowanother }) {
  return (
    <>
      <div
        style={{
          backgroundColor: "transparent",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
        }}
        onClick={handleShowanother}
      ></div>
      <div
        style={{
          width: "20rem",
          border: "1px solid black",
          padding: "1rem",
          borderRadius: ".25rem",
          position: "absolute",
          right: "0.5rem",
          top: "4rem",
          backgroundColor: "orange",
          color: "white",
        }}
      >
        <h3>hii</h3>
        <p>this is a small statement for checkout.</p>
      </div>
    </>
  );
}

export default ShowAnotherComponent;
