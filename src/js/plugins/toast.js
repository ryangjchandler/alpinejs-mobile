import { Toast } from "@capacitor/toast"

export default function (Alpine) {
    Alpine.magic(
      "toast",
      () =>
        async (text, { duration = "short", position = "top" } = {}) => {
          return Toast.show({
            text,
            duration,
            position,
          });
        }
    );
}