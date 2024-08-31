import Link from "next/link";

function TopMenu({setSearchInput, setOpen}) {

    function search(){
        let input = document.getElementById("searchInput").value;
        setSearchInput(input)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <div className="topMenu">
            <img className="logo" alt="logo" src="" />
            <div className="TM_rightSection">
                <Link className="material-symbols-outlined addEvent" href={'/agregarEvento'}>
                    add_circle
                </Link>
                <input type="text" id="searchInput" onKeyUp={search} placeholder="Buscar.." />
            </div>
            
        </div>
    )
}

export default TopMenu