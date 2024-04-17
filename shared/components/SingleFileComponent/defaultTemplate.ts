export const defaultTemplate = `<div class="banner">
<img class="card-image" :src="image" alt="none"/>
<div>
  <div>{{ title }}</div>
  <div>{{ description }}</div>
  <button> click </button>
</div>
</div>`;

export const defaultStyles = `
.banner {
  padding: 1rem;
  background-color: #1e1e1e;
  border-radius: 5px;
}

.card {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #2b2b2b;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.card-image {
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
}
`;