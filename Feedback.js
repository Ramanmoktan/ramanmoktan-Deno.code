import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

let feedbackCounts = {
  1: 0,
  2: 0,
  3: 0
};
app.get("/feedbacks/1", (c) => {
  return c.text(`Feedback 1: ${feedbackCounts[1]}`);
});

app.post("/feedbacks/1", (c) => {
  feedbackCounts[1] += 1;
  return c.text(`Feedback 1: ${feedbackCounts[1]}`);
});

app.get("/feedbacks/2", (c) => {
  return c.text(`Feedback 2: ${feedbackCounts[2]}`);
});

app.post("/feedbacks/2", (c) => {
  feedbackCounts[2] += 1;
  return c.text(`Feedback 2: ${feedbackCounts[2]}`);
});

app.get("/feedbacks/3", (c) => {
  return c.text(`Feedback 3: ${feedbackCounts[3]}`);
});

app.post("/feedbacks/3", (c) => {
  feedbackCounts[3] += 1;
  return c.text(`Feedback 3: ${feedbackCounts[3]}`);
});

export default app;
