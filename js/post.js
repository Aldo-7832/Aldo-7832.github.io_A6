function getAll() {
    fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
            let rows = "";
            data.data.forEach(element => {
                rows += `<tr>
                <td>${element.id}</td>
                <td>${element.first_name}</td>
                <td>${element.last_name}</td>
                <td>${element.email}</td>
                <td><img src='${element.avatar}'/></td>
            </tr>`;
            });
            $("#results").append(rows);
        });

}

function create() {
    let user = {
        "name": document.getElementById("name").value,
        "job": document.getElementById("job").value
    }
    fetch('https://reqres.in/api/users', {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    }).then(response => response.json())
        .then(json => {
            console.log(json);
            let rows = "";
            rows += `<tr>
                <td>${json.id}</td>
                <td>${json.name}</td>
                <td>${json.job}</td>
                </tr>`;
            $("#resultsCreate").append(rows);
        })
        .catch(err => console.log(err));
}