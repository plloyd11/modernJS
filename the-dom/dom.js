const content = document.querySelector('p');

// Methods for adding / removing classes 

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');
content.classList.toggle('success');

// FOREACH ON A NODELIST (Returned by querySelectorAll) IS CRUCIAL

const applyClass = () => {
    const challengeItem = document.querySelectorAll('.challenge > p');

    challengeItem.forEach(item => {
        if (item.textContent.includes('success')) {
            item.classList.add('success');
        } else if (item.textContent.includes('error')) {
            item.classList.add('error');
        }
    });
};

applyClass();

// Turn an HTML collection into an Array - doesn't alter original value

const article = document.querySelector('article');

Array.from(article.children).forEach(item => {
    item.classList.add('article-element');
});

// Methods for DOM traversal

// .children .parentElement .nextElementSibling .previousElementSibling