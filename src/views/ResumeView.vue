<template>
  <div class="pdf-viewer">
    <a
      class="download-button"
      href="/files/Mikolaj Hilgert CV.pdf"
      download="Mikolaj Hilgert CV"
    >
      Download as PDF
    </a>
    <div class="pdf-container">
      <object
        :data="pdfUrl"
        type="application/pdf"
        frameborder="0"
        width="100%"
        height="100%"
      >
        <embed :src="pdfUrl" width="100%" height="100%" />
      </object>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pdfUrl:
        "https://docs.google.com/gview?url=https://www.mikolajhilgert.pl/files/Mikolaj%20Hilgert%20CV.pdf&embedded=true",
    };
  },
};
</script>

<style scoped>
.pdf-viewer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.pdf-container {
  flex: 1;
}

.download-button {
  margin: 20px;
  align-self: center;
}
</style>
