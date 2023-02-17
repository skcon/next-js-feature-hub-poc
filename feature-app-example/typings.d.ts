declare global {
  interface Window {
    vbo: VboGa;
  }
}

export interface VboGa {
    id: number;
    event: string;
    eventType: string;
  }
  
  