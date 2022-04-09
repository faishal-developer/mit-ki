const validate = values => {
    const errors = {};
    if (!values.first_name) {
        errors.first_name = '!Required!please fill it';
    } else if (values.first_name.length > 15) {
        errors.first_name = 'Must be 15 characters or less';
    }

    if (!values.last_name) {
        errors.last_name = '!Required!please fill it';
    } else if (values.last_name.length > 15) {
        errors.last_name = 'Must be 15 characters or less';
    }

    // if (!values.user_type) {
    //     errors.type = '!Required!please select one';
    // }
    // if (!values.division) {
    //     errors.type = '!Required!please select one';
    // }
    // if (!values.district) {
    //     errors.type = '!Required!please select one';
    // }

    return errors;
};
const submit = (values, from, updateUser, addUser, setUser, setIsOpen) => {
    setUser({})
    if (from === 'Edit User') {
        updateUser(values)
    }
    else if(from==='Add User'){
        setIsOpen(false)
        addUser(values)
    }
}

const division ={
    dhaka: ['Dhaka', 'Gazipur', 'Tangail', 'Faridpur', 'Munshiganj', 'Narayanganj', 'shoriotpur', 'Madaripur', 'Rajbari'],
    chittagong: ['Bandarban', 'Brahmanbaria', 'Chandpur', 'Chittagong', 'Comilla', 'Coxs Bazar','Feni','Noakhali','Luxmipur'],
    Rajsahi: ['Rajshahi','Sirajganj','Pabna','Bogura','Chapainawabganj','Naogaon','Joypurhat','Natore'],
    Barishal: ['Pirojpur', 'Patuakhali', 'Jhalokathi', 'Bhola', 'Barishal','Barguna'],
    Khulna: ['Satkhira', 'Narail', 'Meherpur', 'Magura', 'Khulna', 'Jinaidaha', 'Jessore', 'Chuadanga','Bagherhat'],
    Sylhet: ['Sylhet','Sunamganj','Moulvibazar','Habiganj'],
    Mymensingh: ['Jamālpur', 'Sherpur', 'Sarishābāri', 'Netrakona','Mymensingh']
}

export  {validate, division,submit}