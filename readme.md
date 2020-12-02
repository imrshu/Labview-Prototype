# Prerequisites
- Install python & python pip on the system.
- For Ubuntu users run following commands `sudo apt-get install python3` & `sudo apt-get install python3-pip`.
- Now that we have python installed on the system, we need to install python virtaul environment.
- Run this command `sudo apt-get install python3-venv`.

## Steps To Run Project
- Download the zip file.
- Extract the zip file on the desktop.
- Now Open up the terminal & Go to the project folder using `cd Desktop/dashbuilder`.
- Now create a virtaul environment using `python3 -m venv venv`.
- Activate the environment using `source venv/bin/activate`.
- Now install all the dependencies using `pip install -r requirements.txt` or `pip3 install -r requirements.txt`.
- Now run the migrations using `python3 manage.py migrate`.
- Now run this command `python3 manage.py runserver` to start the server.
- Finally open up the browser and go to this url `localhost:8000`.