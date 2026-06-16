import speedtest
import time


def format_speed(speed_bps):
    mbps = speed_bps / 1_000_000
    return f"{mbps:.2f} Mbps"


def test_internet_speed():
    print("Iniciando teste de velocidade da internet...")
    print("-" * 45)

    st = speedtest.Speedtest()

    print("Buscando melhor servidor...")
    st.get_best_server()
    server = st.results.server
    print(f"Servidor: {server['sponsor']} - {server['name']}, {server['country']}")
    print(f"Latência (ping): {server['latency']:.2f} ms")
    print("-" * 45)

    print("Testando download...", end=" ", flush=True)
    start = time.time()
    download_speed = st.download()
    elapsed = time.time() - start
    print(f"concluído em {elapsed:.1f}s")
    print(f"Download: {format_speed(download_speed)}")

    print("Testando upload...", end=" ", flush=True)
    start = time.time()
    upload_speed = st.upload()
    elapsed = time.time() - start
    print(f"concluído em {elapsed:.1f}s")
    print(f"Upload:   {format_speed(upload_speed)}")

    print("-" * 45)
    print("Resultado final:")
    print(f"  Ping:     {server['latency']:.2f} ms")
    print(f"  Download: {format_speed(download_speed)}")
    print(f"  Upload:   {format_speed(upload_speed)}")


if __name__ == "__main__":
    test_internet_speed()
