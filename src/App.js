import './App.scss';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://www.meme-arsenal.com/memes/0c55ae07b3eaf682f7ee9af1594d24a3.jpg" alt="img"/>
            </header>
            <nav className='nav'>
                <div>
                    <a href='google.com'>Profile</a>
                </div>
                <div>
                    <a href='google.com'>Messages</a>
                </div>
                <div>
                    <a href='google.com'>News</a>
                </div>
                <div>
                    <a href='google.com'>Music</a>
                </div>
                <div>
                    <a href='google.com'>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src="https://klike.net/uploads/posts/2022-12/1670484104_3-33.jpg" alt="img"/>
                </div>
                <div>
                    ava + descr
                </div>
                <div>
                    My posts
                    <div>
                        New post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
