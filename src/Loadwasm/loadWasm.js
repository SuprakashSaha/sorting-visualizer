// loadWasm.js
export async function loadWasm() {
  try {
    // Dynamic import of Emscripten-generated JS module
    const moduleFactory = await import("../wasm/sorting");

    // Initialize WebAssembly with proper .wasm file path
    const wasmModule = await moduleFactory.default({
      locateFile: (file) => `/sorting.wasm`, // served from public/
    });

    console.log("✅ WASM module loaded successfully!");
    return wasmModule;
  } catch (error) {
    console.error("❌ Failed to load WASM module:", error);
    throw error;
  }
}
