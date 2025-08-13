// Sample movie data
const movies = [
    {
        id: 1,
        title: "PHÁP Y TẦN MINH-NGƯỜI ĐỌC TÂM",
        year: 2022,
        genre: ["Tội phạm "],
        director: "Thi Lỗi Diễn",
        actors: ["Trương Diệu (vai Tần Minh)", "Thang Mẫn (vai An Nhiên)", "Bành Sở Việt (vai Lâm Đào)","Mã Hân Mặc (vai Hoàn Hoàn) "],
        description: "Sau khi mẹ qua đời một cách bí ẩn, Tần Minh – một sinh viên tốt nghiệp ngành pháp y – trở về quê nhà để làm rõ sự thật. Tuy nhiên, anh vô tình vướng vào một vụ án giết người khác, buộc phải điều tra song song hai vụ án. Do gặp khó khăn trong giao tiếp, Tần Minh phải nhờ giúp đỡ từ chính quyền địa phương và làm việc cùng nhóm pháp y và cảnh sát. Tuy vậy, với kỹ năng pháp y và năng lực đặc biệt, anh góp công lớn vào việc phá án, lần lượt hé lộ những bí mật tâm lý và âm mưu đáng sợ đằng sau mỗi vụ.",
        poster: "images/Pháp y Tần Minh.jpg"
    },
    {
        id: 2,
        title: "KHI EM MỈM CƯỜI RẤT ĐẸP",
        year: 2021,
        genre: ["Thanh xuân", "E-Sport"],
        director: "Cầu Trọng Duy",
        actors: ["Hứa Khải(vai Lục Tư Thành)", "Trình Tiêu(vai Đồng Dao)", "James Caan"],
        description: "Phim kể câu chuyện của Đồng Dao – cô nữ sinh bước chân vào thế giới e-Sports bằng chính năng lực, trở thành tuyển thủ chuyên nghiệp đầu tiên trong lịch sử lĩnh vực này ở Trung Quốc. Cô phải vượt qua vô số định kiến và thách thức để chứng minh năng lực, đồng thời cùng Lục Tư Thành, bạn đồng nghiệp và đồng thời là người yêu, họ cùng nhau chinh phục đấu trường quốc tế và theo đuổi giấc mơ vô địch giải toàn cầu.",
        poster: "images/Khi em mỉm cười rất đẹp.jpg"
    },
    {
        id: 3,
        title: "SOI SÁNG CHO EM",
        year: 2023,
        genre: ["Tâm lý ", "Thanh xuân", "Chính kịch"],
        director: "Kim Sa, Du Ba, Cát Vàng",
        actors: ["Trần Vỹ Đình (vai Cận Thời Xuyên )", "Chương Nhược Nam (vai Từ Lai)"],
        description: "Bộ phim kể về tình yêu định mệnh giữa Từ Lai, một nữ phóng viên mạnh mẽ, và Cận Thời Xuyên, một nam lính cứu hoả hiên ngang. Cách đây 10 năm, anh đã cứu mạng cô trong một trận động đất, khắc sâu hình ảnh anh trong trái tim cô. Nhiều năm sau, cô gặp lại anh dưới thân phận huấn luyện viên chó quốc tế. Cùng nhau, họ trải qua nhiều biến cố, hiểu lầm và thử thách, đến khi cùng nhau vượt qua để tiến đến một kết thúc viên mãn – đám cưới hạnh phúc.",
        poster: "images/Soi sáng cho em.jpg"
    },
    {
        id: 4,
        title: "KHI ANH CHẠY VỀ PHÍA EM",
        year: 2023,
        genre: ["Học đường"],
        director: "Miêu Đích Thụ",
        actors: ["Chu Dực Nhiên (Trương Lục Nhượng)", "Trương Miểu Di (Tô Tại Tại)"],
        description: "Phim kể về câu chuyện ngọt ngào của Tô Tại Tại, một nữ sinh lạc quan, sôi nổi, và Trương Lục Nhượng, học bá lạnh lùng và ít nói. Sự xuất hiện của Tô Tại Tại trong trường đã dần kéo Trương Lục Nhượng ra khỏi lớp vỏ bọc tự ti, giúp anh cởi mở hơn và hiểu rằng bản thân xứng đáng được chú ý và yêu quý. Xuyên suốt phim, tình yêu nảy nở trong túp lều bạn bè, cùng với những khoảnh khắc chân thành, hài hước và đầy cảm xúc của tuổi học trò.",
        poster: "images/Khi anh chạy về phía em.jpg"
    },
    {
        id: 5,
        title: "HẬU DUỆ MẶT TRỜI",
        year: 2018,
        genre: ["Hành động", "Lãng mạn", "Chính kịch"],
        director: "Trần Bửu Lộc",
        actors: ["Song Luân( vai Đại úy Duy Kiên)", "Khả Ngân( vai bác sĩ Hoài Phương)", "Hữu Vi(vai Thượng úy Bảo Huy)","Cao Thái Hà(vai Trung úy Minh Ngọc)"],
        description: "Phim xoay quanh câu chuyện tình yêu giữa Đại úy Duy Kiên (Song Luân) – đội trưởng đội đặc nhiệm ưu tú, và Bác sĩ Hoài Phương (Khả Ngân) – một nữ bác sĩ tài năng, đầy nhiệt huyết. Trong một lần tình cờ gặp gỡ tại bệnh viện, họ nhanh chóng bị thu hút bởi nhau nhưng lại bất đồng về quan điểm sống: Duy Kiên thường phải đối mặt với chiến đấu, nguy hiểm và cái chết; còn Hoài Phương lại luôn cố gắng cứu sống mọi người. Sau một thời gian xa cách, số phận đưa họ gặp lại nhau khi Hoài Phương được cử đến làm việc tại một khu vực bị ảnh hưởng bởi chiến tranh và thiên tai, nơi Duy Kiên cùng đồng đội đang làm nhiệm vụ gìn giữ hòa bình. Tại đây, họ cùng nhau trải qua nhiều thử thách: đối phó với tội phạm quốc tế, cứu hộ sau động đất, chống dịch bệnh và hỗ trợ người dân. Những khó khăn, hiểm nguy đã giúp họ hiểu và trân trọng nhau hơn, từ đó gắn bó trong cả tình yêu lẫn trách nhiệm với Tổ quốc.",
        poster: "images/Hậu duệ mặt trời.jpg"
    },
    {
        id: 6,
        title: "GẠO NẾP GẠO TẺ",
        year: 2018,
        genre: [, "Gia đình",],
        director: "Võ Thạch Thảo",
        actors: ["NSND Hồng Vân(vai Bà Mai)", "Mai Huỳnh (vai Ông Vương)", "Lê Phương(vai Hương)", "Thúy Ngân(vai Hân)","Phương Hằng(vai Minh )"],
        description: "Gia đình bà Mai và ông Vương, ông Vương - giáo viên dạy lịch sử tại một trường cấp hai, bà Mai làm nội trợ, sống cùng với mẹ và em trai ông Vương. Cả đời nhọc nhằn kiếm tiền vì các con, bà Mai luôn mong muốn các con mình giàu sang và có địa vị xã hội. Hương - cô con gái đầu lòng. Lúc mang thai Hương, cả gia đình rất mong đứa bé sẽ là con trai nên mẹ chồng rất cưng chiều bà Mai. Khi biết Hương là con gái, bà nội rất thất vọng và bạc đãi bà Mai, cùng lúc đó, gia đình gặp nhiều khó khăn nên bà Mai trở nên khó chịu và không hề quan tâm nhiều đến cô con gái đầu lòng này. Đỉnh điểm là đến lúc Hương có bầu trước khi cưới với Công - chồng của Hương, bà Mai lại càng miệt thị Hương nhiều hơn vì cô đã làm mất mặt gia đình. Trong khi đang học dở đại học, Hương phải nghỉ học để nhường cơ hội cho em gái và chú của mình. Mặc dù chịu sự chỉ trích và miệt thị từ mẹ ruột và xã hội, Hương vẫn luôn cố gắng chăm chỉ làm việc để nuôi cả gia đình bé nhỏ. Ngược lại, bà Mai rất cưng chiều Hân - cô con gái thứ hai vì cô lọt vào top 10 Hoa hậu Việt Nam, lấy chồng doanh nhân thành đạt và sau khi cô ra đời, bà Mai trúng xổ số và có tiền sửa sang lại căn nhà. Cô con gái thứ ba tên Minh cũng khiến bà nhức đầu khi tự ý bỏ nghề y để chuyển sang làm biên kịch.[2] Sau đó, bà còn nổi nóng hơn khi cô con gái út tên Minh nhất quyết lấy người chồng đã từng phải vào tù...",
        poster: "images/Gạo nếp gạo tẻ.jpg"
    },
    {
        id: 7,
        title: "TẠI SAO BOSS MUỐN CƯỚI TÔI",
        year: 2019,
        genre: ["Ngôn tình"],
        director: "Ngô Cường",
        actors: ["Từ Khai Sính(vai Lăng Dị Châu)", "Vương Song(vai Hạ Lâm)", "Dịch Bách Thần(vai Sở Yến)", "Hoàng Thiên Thạc(vai Văn Lập)", "Dương Hạo Minh(vai Nam Thiên)", "Lưu Giả Tỷ(vai Gỉa Phi"],
        description: "Tại sao Boss muốn cưới tôi là một bộ phim truyền hình Trung Quốc năm 2019 với sự tham gia của Vương Song và Từ Khai Sính . Cốt truyện xoay quanh nữ diễn viên hạng D mới nổi Hạ Lâm (Vương Song) được chẩn đoán mắc bệnh bạch cầu. Để có được tủy xương hiến tặng, cô đã ký kết hôn ước với một tổng giám đốc trẻ đẹp trai, Lăng Dị Châu ( Từ Khai Sính ).",
        poster: "images/Tại sao boss muốn cưới tôi.jpg"
    },
    {
        id: 8,
        title: "GOING SEVENTEEN",
        year: 2017,
        genre: ["Giải trí"],
        director: " Kim Hyun-seok",
        actors: ["SCoups","Jeonghan","Joshua","Woozi","DK","Seungkwan","Vernon","Dino","Jun","The8","Hoshi","Mingyu","Wonwoo"],
        description: "Going Seventeen (tiếng Hàn: 고잉 세븐틴) là một Chương trình chiếu mạng tạp kỹ của Hàn Quốc với sự tham gia của nhóm nhạc Seventeen. Chương trình được xem miễn phí trên YouTube và V Live (sau đó là trên Weverse) kể từ khi ra mắt vào ngày 12 tháng 6 năm 2017.[1] Chương trình do các thành viên Seventeen tham gia vào nhiều hoạt động khác nhau tùy thuộc vào ý tưởng của từng tập, nó có thể là trò chơi hoặc hoàn thành thử thách đến tiểu phẩm, nhập vai và Trò chuyện cùng nhau.Chương trình bắt đầu chủ yếu với dưới dạng Vlog trong các mùa đầu tiên, giới thiệu các hoạt động khác nhau của Seventeen với nhau đa dạng thể loại và được chiếu không liên tục. Vào năm 2019, Chương trình chính thức chuyển sang định dạng chương trình tạp kỹ và được phát sóng hàng tuần vào thứ Hai kể từ tháng 1 năm 2020. Phần thứ năm cho đến bắt đầu vào tháng 4 năm 2021 và phát sóng vào thứ Tư.",
        poster: "images/Going Seventeen.jpg"
    },
    
];

// DOM Elements
const moviesContainer = document.getElementById('movies-container');
const genreFiltersContainer = document.getElementById('genre-filters');
const searchInput = document.getElementById('search-input');
const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.getElementById('theme-label');
const movieModal = document.getElementById('movie-modal');
const modalBody = document.getElementById('modal-body');
const closeBtn = document.querySelector('.close-btn');

// State
let selectedGenres = [];
let searchQuery = '';

// Initialize the app
function init() {
    renderMovies(movies);
    setupGenreFilters();
    setupEventListeners();
    checkThemePreference();
}

// Render movies to the DOM
function renderMovies(moviesToRender) {
    moviesContainer.innerHTML = '';
    
    if (moviesToRender.length === 0) {
        moviesContainer.innerHTML = '<p class="no-results">No movies found matching your criteria.</p>';
        return;
    }
    
    moviesToRender.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <p class="movie-year">${movie.year}</p>
            </div>
        `;
        movieCard.addEventListener('click', () => openMovieModal(movie));
        moviesContainer.appendChild(movieCard);
    });
}

// Setup genre filters
function setupGenreFilters() {
    // Get all unique genres
    const allGenres = [];
    movies.forEach(movie => {
        movie.genre.forEach(genre => {
            if (!allGenres.includes(genre)) {
                allGenres.push(genre);
            }
        });
    });
    
    // Sort genres alphabetically
    allGenres.sort();
    
    // Create checkboxes for each genre
    allGenres.forEach(genre => {
        const label = document.createElement('label');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = genre;
        checkbox.addEventListener('change', handleGenreFilter);
        
        label.appendChild(checkbox);
        label.appendChild(document.createTextNode(genre));
        
        genreFiltersContainer.appendChild(label);
    });
}

// Handle genre filter changes
function handleGenreFilter(e) {
    const genre = e.target.value;
    
    if (e.target.checked) {
        selectedGenres.push(genre);
    } else {
        selectedGenres = selectedGenres.filter(g => g !== genre);
    }
    
    filterMovies();
}

// Handle search input with debounce
let debounceTimer;
function handleSearch() {
    searchQuery = searchInput.value.toLowerCase();
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(filterMovies, 300);
}

// Filter movies based on selected genres and search query
function filterMovies() {
    let filteredMovies = movies;
    
    // Filter by genre if any genres are selected
    if (selectedGenres.length > 0) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.genre.some(genre => selectedGenres.includes(genre))
        );
    }
    
    // Filter by search query if there is one
    if (searchQuery) {
        filteredMovies = filteredMovies.filter(movie => 
            movie.title.toLowerCase().includes(searchQuery)
        );
    }
    
    renderMovies(filteredMovies);
}

// Open movie modal with details
function openMovieModal(movie) {
    modalBody.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" class="modal-poster">
        <div class="modal-details">
            <h2 class="modal-title">${movie.title} (${movie.year})</h2>
            <div class="modal-meta">
                <span><strong>Director:</strong> ${movie.director}</span>
                <span><strong>Genre:</strong> ${movie.genre.join(', ')}</span>
            </div>
            <p class="modal-description">${movie.description}</p>
            <div class="modal-cast">
                <p><strong>Cast:</strong> ${movie.actors.join(', ')}</p>
            </div>
        </div>
    `;
    movieModal.style.display = 'block';
}

// Close movie modal
function closeMovieModal() {
    movieModal.style.display = 'none';
}

// Toggle dark/light theme
function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    themeLabel.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Check for saved theme preference
function checkThemePreference() {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    if (savedMode) {
        document.body.classList.add('dark-mode');
        themeToggle.checked = true;
        themeLabel.textContent = 'Light Mode';
    }
}

// Setup event listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    themeToggle.addEventListener('change', toggleTheme);
    closeBtn.addEventListener('click', closeMovieModal);
    window.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            closeMovieModal();
        }
    });
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);