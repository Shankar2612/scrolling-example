import React, { useEffect, useState } from 'react'
import "./App.css"

const App = () => {
  const [fixed, setFixed] = useState(false)

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     const scrollSect = document.getElementById("scroll-sect")
  //     const scrollSidebar = document.getElementById("scroll-sidebar")
  //     console.log(window.pageYOffset)
  //     console.log(scrollSect.offsetTop)
  //     if(window.pageXOffset >= scrollSect.offsetTop) {
  //       // setFixed(true)
  //       scrollSidebar.style.position = "fixed";
  //       scrollSect.style.backgroundColor = "yellow"
  //     } else {
  //       // setFixed(false)
  //     }
  //   })
  // }, [])

  // console.log(fixed)

  return (
    <div className='app-cont'>
      <div className='main-app'>
        <section>
          <h2 className='heading'>Cats</h2>
          <div style={{gridTemplateColumns: '2.5fr 4fr'}} className='img-para-cont'>
            <div className='img-cont'>
              <img className='img' src={"https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
            </div>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor 
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section>
          <h2 className='heading'>Dogs</h2>
          <div style={{gridTemplateColumns: '4fr 2.5fr'}} className='img-para-cont'>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor 
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <div className='img-cont'>
              <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
            </div>
          </div>
        </section>
        <section>
          <h2 className='heading'>Birds</h2>
          <div style={{gridTemplateColumns: '2.5fr 4fr'}} className='img-para-cont'>
            <div className='img-cont'>
              <img className='img' src={"https://images.unsplash.com/photo-1493236296276-d17357e28888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
            </div>
            <p className='para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor 
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>
        <section id="scroll-sect" className='scroll-sect'>
          <div id="scroll-sidebar" className='sidebar'>
            <p>Lion</p>
            <p>Tiger</p>
            <p>Snake</p>
            <p>Horse</p>
            <p>Lion</p>
            <p>Tiger</p>
            <p>Snake</p>
            <p>Horse</p>
          </div>
          <div className='scroll-cont'>
            <div className='scroll-heading-cont'>
              <p>Image 1</p>
              <p>Image 2</p>
              <p>Image 3</p>
              <p>Image 4</p>
            </div>
            <div className='scrollable-part'>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1612311683149-939135aa6afa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
              <div className='img-cont'>
                <img className='img' src={"https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"} alt="cat" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App