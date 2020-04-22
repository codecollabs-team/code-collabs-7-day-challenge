# CODE COLLABS DAY 2: CORONA HELPER
# REGINA BISSAI NZENZA
# 21/04/2020

from tkinter import *
from tkinter import ttk

keyWorkers = ("doctor", "nurse", "healthcare assistant", "midwife", "paramedic",
              "social worker", "care worker", "pharmacist", "teacher", "teaching assistant",
              "childcare worker", "bus driver", "tram driver", "train driver", "tube driver",
              "lorry driver", "pilot", "floor manager", "shop floor manager", "postman", "electrical technician",
              "maintenance technician", "trading assistant", "nursing assistant")

# creating window and modifying font. fonts of ttk widgets will remain unchanged
root = Tk()
root.option_add("*Font", "helvetica 12")

# stores state of radiobutton that is selected
yOrN = IntVar(root)

# creating and placing first question and radiobuttons on GUI
q1 = Label(text = "Are you currently inside?").pack()
ttk.Radiobutton(root, text="Yes", variable=yOrN, value=1).pack()
n = ttk.Radiobutton(root, text="No", variable=yOrN, value=0).pack()

# creating and placing second question and entry box on GUI
q2 = Label(text = "What is your job role?").pack(pady=5)
userInput = ttk.Entry(root, state="normal")
userInput.pack()

# creating and placing button on GUI
submit = ttk.Button(root, text="Submit")
submit.pack(pady=5)

# ans label will be replaced with text based on what user submits
ans = Label(root)
ans.pack()

# function to determine what will be displayed to the user
def submitInfo(event):
    job = userInput.get().lower()
    if job not in keyWorkers and not yOrN.get():
        ans.configure(text="Please work from home")
    else:
        ans.configure(text="Thank you and stay safe!")

# linking the button to the function that will occur when it is pressed
submit.bind("<Button-1>", submitInfo)
