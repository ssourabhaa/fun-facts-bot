from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/fact")
def get_fact():
    res = requests.get(
        "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en",
        timeout=5
    )
    return {"fact": res.json()["text"]}