
let tbody = document.getElementById("tbody")

fetch("https://raw.githubusercontent.com/abc1-0/assets/main/mounts.json")
.then(res => res.json())
.then(json => {
    json.map(data => {
        tbody.append(td_fun(data));
    })
})

function td_fun({Pcs,PHP,Mounts,Rarity,Image}){
    let td = document.createElement('tr')
    td.innerHTML = `
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <span class="text-m text-gray-500">${Pcs}</span>
</td> 
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
    <span class="text-sm text-gray-500">
    <a href="${Image}">${Mounts}</a>
    </span>
    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
    ${Rarity}
</span>
</td>
</td>
<td class="px-6 py-4 whitespace-nowrap">
    <span class="text-sm text-black-500">${PHP}</span>
</td>
    `;
    return td
}