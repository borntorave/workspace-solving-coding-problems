import pandas as pd

def renameColumns(students: pd.DataFrame) -> pd.DataFrame:
    new_format = ['student_id', 'first_name', 'last_name', 'age_in_years']
    
    students.columns = new_format
    return students
 