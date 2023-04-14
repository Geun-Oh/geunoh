function Error404($conatiner) {
    this.$conatiner = $conatiner;

    this.render = () => `
        <main class="error404">
            <p>에러 페이지입니다ㅜㅜ</p>
        </main>
    `;
    this.render();
};
export default Error404;