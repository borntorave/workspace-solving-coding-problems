import pandas as pd

def getDataframeSize(players: pd.DataFrame) -> List[int]:
    df = pd.DataFrame(players)
    ro = len(df)
    col = len(df.columns)
    return [ro, col]