<template>
  <time>
    {{ formatDate(date) }}
  </time>
</template>

<script>
export default {

  
  props: {
    date: {
      type: String,
      required: false,
    },
  },
  methods: {
    // Create a new date object from the given date
    formatDate(date) {
      const dateObj = new Date(date);
      // Get the current date
      const currentDate = new Date();

      // Format the time in a user-friendly way
      const time = `${dateObj.getHours() % 12 || 12}:${
        dateObj.getMinutes() < 10
          ? `0${dateObj.getMinutes()}`
          : dateObj.getMinutes()
      } ${dateObj.getHours() >= 12 ? "PM" : "AM"}`;

      // Check if the given date is today's date
      if (dateObj.getDate() === currentDate.getDate()) {
        // Calculate how many hours ago the date occurred
        const hoursAgo = Math.floor((currentDate - dateObj) / 3600000);

        // If the date occurred within the last 23 hours, return the number of hours ago
        // Otherwise, return "Today at [time]"
        return hoursAgo < 23 && hoursAgo > 0
          ? `${hoursAgo}hrs ago`
          : `Today at ${time}`;
      } else {
        // Format the month, day, and year in a user-friendly way
        const month = dateObj.toLocaleString("default", { month: "short" });
        const day = dateObj.getDate();
        const year = dateObj.getFullYear();
        return `${month} ${day}, ${year}`;
      }
    },
  },
};
</script>

<style>
</style>