import { useState } from 'react';
import { FFmpeg } from '@ffmpeg/ffmpeg';
import { toBlobURL } from '@ffmpeg/util';

export default function Index() {
  const [loaded, setLoaded] = useState(false);

  const load = async () => {
    const ffmpeg = new FFmpeg();

    const baseURL = '/@ffmpeg/core@0.12.6/dist/esm';
    await ffmpeg.load({
      coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, 'text/javascript'),
      wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, 'application/wasm'),
      classWorkerURL: await toBlobURL('/', 'text/javascript'),
    });

    setLoaded(true);
  };

  return (
    <main style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <h1>ffmpeg/WSAM</h1>
      {loaded ? <p>ffmpeg loaded</p> : <button onClick={load}>Load ffmpeg-core (~31 MB)</button>}
    </main>
  );
}
