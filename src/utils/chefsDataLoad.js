const chefsDataLoad = async() => {
    const res = fetch(` https://spice-palate-server090.vercel.app/chefs`)
    const data = (await res).json()
    return data;
}

export default chefsDataLoad;