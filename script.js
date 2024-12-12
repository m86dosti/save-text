        let names = JSON.parse(localStorage.getItem("names")) || [];

        function addname() {
            let a = prompt("Enter name:");
            if (a) {
                let nameObj = {
                    name: a,
                    time: new Date().toLocaleString()
                };
                names.push(nameObj);
                localStorage.setItem("names", JSON.stringify(names));
                displayNames();
            }
        }

        function clearStorage() {
            if (confirm("Are you sure you want to clear all names?")) {
                localStorage.clear();
                names = [];
                displayNames();
            }
        }

        function deleteName(index) {
            names.splice(index, 1);
            localStorage.setItem("names", JSON.stringify(names));
            displayNames();
        }

        function editName(index) {
            let newName = prompt("Edit name:", names[index].name);
            if (newName) {
                names[index].name = newName;
                names[index].time = new Date().toLocaleString();
                localStorage.setItem("names", JSON.stringify(names));
                displayNames();
            }
        }

        function displayNames() {
            const container = document.getElementById("namesContainer");
            container.innerHTML = names.map((nameObj, index) => {
                return `<div class="name-item">
                            <div class="header">${nameObj.name}</div>
                            <div class="time">Added on: ${nameObj.time}</div>
                            <div class="actions">
                                <button class="edit" onclick="editName(${index})"><i class="fas fa-edit"></i> Edit</button>
                                <button class="delete" onclick="deleteName(${index})"><i class="fas fa-trash"></i> Delete</button>
                            </div>
                        </div>`;
            }).join("");
            document.getElementById("totalCount").innerText = `Total names: ${names.length}`;
        }

        displayNames();
