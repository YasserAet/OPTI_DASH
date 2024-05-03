
  
  <script setup lang="ts">
  
  import '@/assets/js/us-aea-en'
  import { onMounted } from 'vue'
  
  // Create a Socket.IO client instance
  import socketio from 'socket.io-client'
  const sio = socketio('http://localhost:3000')
  
  onMounted(() => {
    // Socket.IO event handlers
    sio.on('connect', () => {
      console.log('Connected to server')
    })
  
    sio.on('disconnect', () => {
      console.log('Disconnected from server')
    })
  
    // Handle 'parkingData' event from server
    sio.on('parkingData', (data) => {
      // Handle parking data here
      console.log('Received parking data:', data)
      // Example: Update the UI with parking data
      updateParkingLayout(data)
    })
  
    // Function to update parking layout UI
    const updateParkingLayout = (data: any) => {
      // Update the UI with parking data
      // Example: Display encoded video frame
      const encodedFrame = data.encoded_frame
      if (encodedFrame) {
        // Convert encoded frame to image and display it in the UI
        const img = document.createElement('img')
        img.src = 'data:image/jpeg;base64,' + encodedFrame
        const myParkElement = document.getElementById('myPark');
        if (myParkElement) {
            myParkElement.innerHTML = '';
            myParkElement.appendChild(img);
        }
        
      }
    }
  })
  
  </script>
  <template>
    <div
      class="col-span-12 rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7"
    >
      <h4 class="mb-2 text-xl font-bold text-black dark:text-white">Parking layout</h4>
      <div id="myPark"></div>
    </div>
  </template>
  