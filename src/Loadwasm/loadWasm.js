export async function loadWasm() {
  try {
    const moduleFactory = await import("../wasm/sorting");

    // 👇 This is the key line (fixes the path for GitHub Pages)
    const wasmModule = await moduleFactory.default({
      locateFile: (file) => `${import.meta.env.BASE_URL}${file}`,
    });

    console.log("✅ WASM module loaded successfully!");
    return wasmModule;
  } catch (error) {
    console.error("❌ Failed to load WASM module:", error);
    throw error;
  }
}
