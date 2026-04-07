/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */
export default {
  async fetch(request) {
    const now = Date.now();

    return new Response(JSON.stringify({
      ok: true,

      // thời gian server (ms)
      server_time_ms: now,

      // dạng readable
      server_time_iso: new Date(now).toISOString(),

      // echo lại client gửi lên (nếu có)
      client_send_ms: request.headers.get("x-client-time") || null

    }), {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}
