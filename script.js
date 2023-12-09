let day_of_week = prompt("Enter the day of week").toLowerCase()
        switch(true)
        {
            case day_of_week=='monday' || day_of_week=='mon':
                alert("Gym chest Day")
                break
            case day_of_week=='tuesday' || day_of_week=='tue':
                alert("Wings Day") 
                break
            case day_of_week=='wednesday' || day_of_week=='wed':
                alert("Bicepts Day")
                break
            case day_of_week=='thursday' || day_of_week=='thu':
                alert("Tricepts Day")
                break
            case day_of_week=='friday' || day_of_week=='fri':
                alert("Shoulders Day")
                break
            case day_of_week=='saturday' || day_of_week=='sat':
                alert("Mix Day")
                break
            case day_of_week=='sunday' || day_of_week=='sun':
                alert("Off Day")
            default:
                alert("Enter a valid Day")
        }