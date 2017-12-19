**Zoo App**  
_Mark Woodward_

**DESCRIPTION:**  
manage a list of animals and display them using an optional filter  

**INSTALLATION:**
* download from github  
* run the following commands to install dependancies : `npm install; bower install;`
* run the following to run in your browser: `gulp serve`

**SPECS:**  
* "listAll() : program displays list of all animals in zoo with EDIT_ANIMAL and NEW_ANIMAL controls"  
INPUT:   `program starts`  
OUTPUT:  `display list consisting of recorded animals and corresponding edit buttons`

* "listAdd() : display set of input fields needed to construct an entity; ends with CREATE and CANCEL buttons to either push a new animal onto the list or abort."  
INPUT:  `NEW_ANIMAL clicked >> fields set >> ADD clicked || NEW_ANIMAL clicked >> CANCEL clicked`  
OUTPUT:  `ADD - create and add a new animal to the lis || CANCEL - abort by hiding the NEW_ANIMAL form`

* "listAmend() : display set of input fields needed to construct an entity (default values are those of the selected element); ends with AMEND and CANCEL buttons to either set the new values or abort."   
INPUT:  `EDIT_ANIMAL clicked >> fields set >> AMEND clicked || EDIT_ANIMAL clicked >> CANCEL clicked`  
OUTPUT:  `AMEND - set the new values to the selected animal || CANCEL - abort by hiding the EDIT form`

* "pipeSort : a drop-down menu"
INPUT:  `the desired option`  
OUTPUT:  `a sorted(sort type determined by option value) list of animals`

**BUGS:**  

**CONTACT:**  

**LICENSE:**  
