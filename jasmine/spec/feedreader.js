$(function() {
	//This is our first test - it tests to make sure that the allFeeds variable has been defined and that it is not empty.
    describe('RSS Feeds', function() {
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		 
		it('urls are defined and not empty', function () {
			for (var i = 0; i < allFeeds.length; i++) {
			expect(allFeeds[i].url).toBeDefined();
			expect(allFeeds[i].url.length).not.toBe(0);
			};
		});
		
		 it('names are defined and not empty', function () {
			for (var i = 0; i < allFeeds.length; i++) {
			expect(allFeeds[i].name).toBeDefined();
			expect(allFeeds[i].name.length).not.toBe(0);
			};
		});		
    });

	
	describe('The menu', function() {
		//this test that ensures the menu element is hidden by default
		 it('the menu element is hidden by default', function() {
			 expect($('body').hasClass('menu-hidden')).toBe(true);
		 });

          //a test that ensures the menu changes visibility when the menu icon is clicked
		 it('the menu changes visibility when the menu icon is clicked', function() {
			 $('.menu-icon-link').trigger('click');
			 expect($('body').hasClass('menu-hidden')).toBe(false);
			 $('.menu-icon-link').trigger('click');
			 expect($('body').hasClass('menu-hidden')).toBe(true);
		 });		  		  
	});

	
	describe('Initial Entries', function() {
	//ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.	 			 
		beforeEach(function (done) {
			loadFeed(0, function () {
			done();
			});	
		});
	
		it('loadFeed function is working', function() {
		expect($('.feed .entry').length).not.toBe(0); //expect($('.feed .entry').length).toBeGreaterThan(0); --> another solution
		});				
	});
		
		 
	describe('New Feed Selection', function() {
    // this test ensures when a new feed is loaded by the loadFeed function that the content actually changes.    
	let firstFeed;
	let secondFeed;
		 
		beforeEach(function (done) {				
			loadFeed(0, function () {
			firstFeed = $('.feed').html();
			console.log(firstFeed); //test to get the proper content
			
				loadFeed(1, function () {
				secondFeed = $('.feed').html();
				console.log(secondFeed); //test to get the proper content
				done();
				});		
			});			
		});
		
		it('new feed is different from the last one', function () {
		expect(firstFeed).not.toEqual(secondFeed);
		});
		
	});
	
}());
