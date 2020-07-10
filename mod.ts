export const KEY_F1 = "277980";
export const KEY_F2 = "277981";
export const KEY_F3 = "277982";
export const KEY_F4 = "277983";
export const KEY_F5 = "27914953126";
export const KEY_F6 = "27914955126";
export const KEY_F7 = "27914956126";
export const KEY_F8 = "27914957126";
export const KEY_F9 = "27915048126";
export const KEY_F10 = "27915049126";
export const KEY_F11 = "2791505112627";
export const KEY_F12 = "279150521268";
export const KEY_INSERT = "279150126";
export const KEY_HOME = "279172";
export const KEY_END = "279170";
export const KEY_PAGEUP = "279153126";
export const KEY_PAGEDOWN = "279154126";
export const KEY_DELETE = "279151126";
export const KEY_ESC = "27";
export const KEY_ENTER = "13";
export const KEY_SPACE = "32";
export const KEY_UP = "279165";
export const KEY_DOWN = "279166";
export const KEY_LEFT = "279168";
export const KEY_RIGHT = "279167";
export const KEY_TAB = "9";
export const KEY_BACKSPACE = "127";

export interface Key {
  name: string;
  value: string;
  code: string;
}

export class Keys {
  async getKey(): Promise<Key> {
    Deno.setRaw(0, true);
    let KEYS: Map<string, Key> = new Map([
      [KEY_F1, { name: "KEY_F1", value: "F1", code: KEY_F1 }],
      [KEY_F2, { name: "KEY_F2", value: "F2", code: KEY_F2 }],
      [KEY_F3, { name: "KEY_F3", value: "F3", code: KEY_F3 }],
      [KEY_F4, { name: "KEY_F4", value: "F4", code: KEY_F4 }],
      [KEY_F5, { name: "KEY_F5", value: "F5", code: KEY_F5 }],
      [KEY_F6, { name: "KEY_F6", value: "F6", code: KEY_F6 }],
      [KEY_F7, { name: "KEY_F7", value: "F7", code: KEY_F7 }],
      [KEY_F8, { name: "KEY_F8", value: "F8", code: KEY_F8 }],
      [KEY_F9, { name: "KEY_F9", value: "F9", code: KEY_F9 }],
      [KEY_F10, { name: "KEY_F10", value: "F10", code: KEY_F10 }],
      [KEY_F11, { name: "KEY_F11", value: "F11", code: KEY_F11 }],
      [KEY_F12, { name: "KEY_F12", value: "F12", code: KEY_F12 }],
      [KEY_INSERT, { name: "KEY_INSERT", value: "INSERT", code: KEY_INSERT }],
      [KEY_HOME, { name: "KEY_HOME", value: "HOME", code: KEY_HOME }],
      [KEY_END, { name: "KEY_END", value: "END", code: KEY_END }],
      [KEY_PAGEUP, { name: "KEY_PAGEUP", value: "PAGEUP", code: KEY_PAGEUP }],
      [
        KEY_PAGEDOWN,
        { name: "KEY_PAGEDOWN", value: "PAGEDOWN", code: KEY_PAGEDOWN },
      ],
      [KEY_DELETE, { name: "KEY_DELETE", value: "DELETE", code: KEY_DELETE }],
      [KEY_ESC, { name: "KEY_ESC", value: "ESC", code: KEY_ESC }],
      [KEY_ENTER, { name: "KEY_ENTER", value: "ENTER", code: KEY_ENTER }],
      [KEY_SPACE, { name: "KEY_SPACE", value: "SPACE", code: KEY_SPACE }],
      [KEY_UP, { name: "KEY_UP", value: "UP", code: KEY_UP }],
      [KEY_DOWN, { name: "KEY_DOWN", value: "DOWN", code: KEY_DOWN }],
      [KEY_LEFT, { name: "KEY_LEFT", value: "LEFT", code: KEY_LEFT }],
      [KEY_RIGHT, { name: "KEY_RIGHT", value: "RIGHT", code: KEY_RIGHT }],
      [KEY_TAB, { name: "KEY_TAB", value: "TAB", code: KEY_TAB }],
      [
        KEY_BACKSPACE,
        { name: "KEY_BACKSPACE", value: "BACKSPACE", code: KEY_BACKSPACE },
      ],
    ]);
    while (true) {
      const buffer = new Uint8Array(8);
      const nread = await Deno.stdin.read(buffer);
      if (nread) {
        const key = buffer.subarray(0, nread).join("");
        Deno.setRaw(0, false);
        const keyObject = KEYS.get(key);
        if (keyObject) return keyObject;
      }
    }
  }

  static async getKey(): Promise<Key> {
    Deno.setRaw(0, true);
    let KEYS: Map<string, Key> = new Map([
      [KEY_F1, { name: "KEY_F1", value: "F1", code: KEY_F1 }],
      [KEY_F2, { name: "KEY_F2", value: "F2", code: KEY_F2 }],
      [KEY_F3, { name: "KEY_F3", value: "F3", code: KEY_F3 }],
      [KEY_F4, { name: "KEY_F4", value: "F4", code: KEY_F4 }],
      [KEY_F5, { name: "KEY_F5", value: "F5", code: KEY_F5 }],
      [KEY_F6, { name: "KEY_F6", value: "F6", code: KEY_F6 }],
      [KEY_F7, { name: "KEY_F7", value: "F7", code: KEY_F7 }],
      [KEY_F8, { name: "KEY_F8", value: "F8", code: KEY_F8 }],
      [KEY_F9, { name: "KEY_F9", value: "F9", code: KEY_F9 }],
      [KEY_F10, { name: "KEY_F10", value: "F10", code: KEY_F10 }],
      [KEY_F11, { name: "KEY_F11", value: "F11", code: KEY_F11 }],
      [KEY_F12, { name: "KEY_F12", value: "F12", code: KEY_F12 }],
      [KEY_INSERT, { name: "KEY_INSERT", value: "INSERT", code: KEY_INSERT }],
      [KEY_HOME, { name: "KEY_HOME", value: "HOME", code: KEY_HOME }],
      [KEY_END, { name: "KEY_END", value: "END", code: KEY_END }],
      [KEY_PAGEUP, { name: "KEY_PAGEUP", value: "PAGEUP", code: KEY_PAGEUP }],
      [
        KEY_PAGEDOWN,
        { name: "KEY_PAGEDOWN", value: "PAGEDOWN", code: KEY_PAGEDOWN },
      ],
      [KEY_DELETE, { name: "KEY_DELETE", value: "DELETE", code: KEY_DELETE }],
      [KEY_ESC, { name: "KEY_ESC", value: "ESC", code: KEY_ESC }],
      [KEY_ENTER, { name: "KEY_ENTER", value: "ENTER", code: KEY_ENTER }],
      [KEY_SPACE, { name: "KEY_SPACE", value: "SPACE", code: KEY_SPACE }],
      [KEY_UP, { name: "KEY_UP", value: "UP", code: KEY_UP }],
      [KEY_DOWN, { name: "KEY_DOWN", value: "DOWN", code: KEY_DOWN }],
      [KEY_LEFT, { name: "KEY_LEFT", value: "LEFT", code: KEY_LEFT }],
      [KEY_RIGHT, { name: "KEY_RIGHT", value: "RIGHT", code: KEY_RIGHT }],
      [KEY_TAB, { name: "KEY_TAB", value: "TAB", code: KEY_TAB }],
      [
        KEY_BACKSPACE,
        { name: "KEY_BACKSPACE", value: "BACKSPACE", code: KEY_BACKSPACE },
      ],
    ]);
    while (true) {
      const buffer = new Uint8Array(8);
      const nread = await Deno.stdin.read(buffer);
      if (nread) {
        const key = buffer.subarray(0, nread).join("");
        Deno.setRaw(0, false);
        const keyObject = KEYS.get(key);
        if (keyObject) return keyObject;
      }
    }
  }
}

// ONLY LINUX
test();

async function test() {
  console.log("ESC - Quit");
  while (true) {
    const key = await Keys.getKey();
    console.log(key);
    if ([KEY_ESC].includes(key.code)) {
      console.log("🦖");
      break;
    }
  }
}
