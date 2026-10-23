import { test, expect, beforeEach } from "vitest";
import { page, userEvent } from "vitest/browser";

beforeEach(() => {
  document.getElementById("test-styles")?.remove();
  document.getElementById("test-btn")?.remove();
});

test("focus element with class .fooX (broken)", async () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    '<style id="test-styles">.fooX { background: green; }</style>',
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    '<button id="test-btn" class="fooX">Click Me</button>',
  );

  await page.getByRole("button", { name: "Click Me" }).click();
});

test("focus element with class .foox (works)", async () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    '<style id="test-styles">.foox { background: green; }</style>',
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    '<button id="test-btn" class="foox">Click Me</button>',
  );

  await page.getByRole("button", { name: "Click Me" }).click();
});

test("non-focused element with class .fooX (works)", async () => {
  document.head.insertAdjacentHTML(
    "beforeend",
    '<style id="test-styles">.fooX { background: green; }</style>',
  );

  document.body.insertAdjacentHTML(
    "beforeend",
    '<button id="test-btn" class="fooX">Click Me</button>',
  );
});
