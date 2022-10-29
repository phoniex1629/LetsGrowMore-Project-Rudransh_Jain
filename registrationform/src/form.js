import './form.css';
import React from 'react';

class Form extends React.Component{

    render(){
    return (
        <div>
        <section class="main">
            <section class="inside">
                <div class="heading">
                    <h1>Survey for the right candidate</h1>
                    <p><strong>Note: This form can only be filled once</strong></p>
                </div>
                <hr/>
                <fieldset>
                    <div class="frm">
                        <legend>Personal Details</legend>
                        <form action="noaction.php" method="post">
                            <div>
                                <label for="name">Name:</label>
                                <input type="text" name="myname" id="name"/>
                            </div>
                            <div>
                                <label for="add">Address:</label>
                                <input type="text" name="add" id="address"/>
                            </div>
                            <div>
                                <label for="email">Email:</label>
                                <input type="email" name="email" id="email"/>
                            </div>
                            <div id="chk">
                                <label for="name">Gender:</label>
                                <p> <input type="checkbox" name="gender" id="" value ="Male"/> Male</p>
                                <p> <input type="checkbox" name="gender" id=""value ="Female"/> Female</p>
                                <p> <input type="checkbox" name="gender" id=""value ="other"/> Other</p>
                            </div>
                        </form>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>About You</legend>
                    <form action="no.php" method="get">
                        <div>
                            <label for="reason">Why do you want to get married</label>
                            <textarea name="myreason" cols="50" rows="10" id = "myreason1"></textarea>
                        </div>
                        <div>
                            <label for="reason">What do you want from life</label>
                            <textarea name="myreason" cols="50" rows="10" id = "myreason2"></textarea>
                        </div>
                    </form>
                </fieldset>
        <button onClick = {this.props.handleClick}>Submit</button>
            </section>
        </section>
    </div>
        );
    }
}

export default Form;