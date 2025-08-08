declare module 'prompt-sync' {
  interface Prompt {
    (ask: string): string;
  }

  function promptSync(config?: { sigint?: boolean }): Prompt;

  export default promptSync;
}
