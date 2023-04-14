function MainPage($conatiner) {
    this.$conatiner = $conatiner;

    this.render = () => {
        this.$conatiner.innerHTML = `
            <main class="mainPage">
                <header>
                    <h1>메인 페이지입니다!</h1>
                </header>
            </main>
        `;
    };
    this.render();
};

export default MainPage;