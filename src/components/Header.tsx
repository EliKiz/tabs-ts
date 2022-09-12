// import '../index.css'

type HeaderProps = { 
    title: string,
    description?: string,
    devider ?: boolean,
    className?: string
}

const Header = ({title}:HeaderProps) =>{ 

    return ( 
        <header className='title'>
            <h2>
                {title}
            </h2>
            <div className="underline"></div>
        </header>
    )
    
}

export default Header