declare module 'asterisk.io' {
    interface ConnectOptions {
      host: string;
      port: number;
    }
  
    interface AsteriskIoSocket {
      send(data: string): Promise<void>;
      close(): void;
      on(event: string, listener: Function): void;
    }
  
    interface AsteriskIo {
      connect(options: ConnectOptions): Promise<AsteriskIoSocket>;
    }
  
    export default AsteriskIo;
  }
  