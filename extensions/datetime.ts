import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

/**
 * Stamps the local time into the main buffer so you can tell when things
 * happened while scrolling back:
 *  - after each user prompt
 *  - at the end of each tool execution (with the tool name)
 *  - at the end of each agent response
 * Uses ctx.ui.notify — UI-only, never enters the model context.
 */
export default function datetimeExtension(pi: ExtensionAPI) {
	const fmt = () =>
		new Date().toLocaleString(undefined, {
			month: "short",
			day: "2-digit",
			hour: "2-digit",
			minute: "2-digit",
		});

	pi.on("message_end", async (event, ctx) => {
		if (!ctx.hasUI) return;
		if (event.message.role !== "user") return;
		ctx.ui.notify(fmt(), "info");
	});

	pi.on("tool_execution_end", async (event, ctx) => {
		if (!ctx.hasUI) return;
		ctx.ui.notify(`${fmt()} · ${event.toolName}`, "info");
	});

	pi.on("agent_end", async (_event, ctx) => {
		if (!ctx.hasUI) return;
		ctx.ui.notify(fmt(), "info");
	});
}
