export default {
  async fetch(request, env, ctx) {
    return new Response(
      `
      <!DOCTYPE html>
      <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Master Tahu Bulat</title>
      </head>
      <body>
        <h1>Master Tahu Bulat</h1>
        <p>Website berhasil dijalankan!</p>
      </body>
      </html>
      `,
      {
        headers: {
          "Content-Type": "text/html;charset=UTF-8"
        }
      }
    );
  }
};
