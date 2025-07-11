#!/usr/bin/env deno build && #!/usr/bin/env deno serve

export default (req: Request) => {
  return new Response(`Hello, from Deno!`);
};
