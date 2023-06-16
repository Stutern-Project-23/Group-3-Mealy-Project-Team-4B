import React from 'react'
import { Link } from 'react-router-dom'

const EditPassword = () => {
  return (
    <div>
       <div>
        <div>
          <Link>x</Link>
        </div>
            <div>
                <h3>Edit Password</h3>
            </div>
            <div>
                <form>
                    <div>
                        <input type='password'placeholder= 'Old password'/>
                    </div>
                    <div>
                        <input type='password'placeholder= 'New password'/>
                    </div>
                    <div>
                        <input type="password" placeholder= "Re-enter New password"/>
                    </div>
                    <div>
                        <button>Save</button>
                    </div>
                    
                </form>

            </div>
        </div>
      
    </div>
  )
}

export default EditPassword
