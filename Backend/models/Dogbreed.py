from db import cursor, conn

class DogBreeds:
    def ___init__(self, name):
        self.id = None 
        self.name = name 

    @classmethod
    def create_table(cls):
        sql = f"""
            CREATE TABLE IF NOT EXISTS {cls.TABLE_NAME} (
                id
            )