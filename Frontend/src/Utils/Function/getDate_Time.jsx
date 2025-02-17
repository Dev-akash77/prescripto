export const getDate_Time = (setSlotDate) => {
  let today = new Date();
  let allSlots = []; // Collect all slots before updating state

  for (let i = 0; i < 7; i++) {
    let currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    //! Store the correct date before modifying currentDate
    let dateStr = currentDate.toDateString();

    //! Set end time for the day at 9:00 PM
    let endTime = new Date(currentDate);
    endTime.setHours(21, 0, 0, 0);

    //! Adjust start time based on whether it's today
    if (i === 0) {
      currentDate.setHours(currentDate.getHours() >= 10 ? currentDate.getHours() : 10);
      currentDate.setMinutes(currentDate.getMinutes() >= 30 ? 30 : 0);
    } else {
      currentDate.setHours(10, 30, 0, 0);
    }

    let timeSlots = [];

    while (currentDate < endTime) {
      let formattedTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      timeSlots.push({
        dateTime: new Date(currentDate),
        formattedTime,
      });

      //! Increment time slot by 30 minutes
      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    allSlots.push({ date: dateStr, slots: timeSlots });
  }

  //! Update state once after collecting all slots
  setSlotDate(allSlots); //!
};
